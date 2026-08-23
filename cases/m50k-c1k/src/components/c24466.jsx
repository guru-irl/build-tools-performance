import React from 'react';
const LABEL_24466 = 'component_24466';
export function Component24466({ value = 24466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24466, 'data-value': derived.doubled }, children);
}
export default Component24466;
