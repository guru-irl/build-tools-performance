import React from 'react';
const LABEL_34716 = 'component_34716';
export function Component34716({ value = 34716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34716, 'data-value': derived.doubled }, children);
}
export default Component34716;
