import React from 'react';
const LABEL_41828 = 'component_41828';
export function Component41828({ value = 41828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41828, 'data-value': derived.doubled }, children);
}
export default Component41828;
