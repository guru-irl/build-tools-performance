import React from 'react';
const LABEL_20417 = 'component_20417';
export function Component20417({ value = 20417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20417, 'data-value': derived.doubled }, children);
}
export default Component20417;
