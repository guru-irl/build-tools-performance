import React from 'react';
const LABEL_20466 = 'component_20466';
export function Component20466({ value = 20466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20466, 'data-value': derived.doubled }, children);
}
export default Component20466;
