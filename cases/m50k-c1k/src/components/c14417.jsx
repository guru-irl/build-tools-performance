import React from 'react';
const LABEL_14417 = 'component_14417';
export function Component14417({ value = 14417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14417, 'data-value': derived.doubled }, children);
}
export default Component14417;
