import React from 'react';
const LABEL_4417 = 'component_4417';
export function Component4417({ value = 4417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4417, 'data-value': derived.doubled }, children);
}
export default Component4417;
