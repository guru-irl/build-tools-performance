import React from 'react';
const LABEL_34329 = 'component_34329';
export function Component34329({ value = 34329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34329, 'data-value': derived.doubled }, children);
}
export default Component34329;
