import React from 'react';
const LABEL_36828 = 'component_36828';
export function Component36828({ value = 36828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36828, 'data-value': derived.doubled }, children);
}
export default Component36828;
