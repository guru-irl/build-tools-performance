import React from 'react';
const LABEL_28417 = 'component_28417';
export function Component28417({ value = 28417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28417, 'data-value': derived.doubled }, children);
}
export default Component28417;
