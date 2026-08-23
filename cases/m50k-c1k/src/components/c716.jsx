import React from 'react';
const LABEL_716 = 'component_716';
export function Component716({ value = 716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_716, 'data-value': derived.doubled }, children);
}
export default Component716;
