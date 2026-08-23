import React from 'react';
const LABEL_8417 = 'component_8417';
export function Component8417({ value = 8417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8417, 'data-value': derived.doubled }, children);
}
export default Component8417;
