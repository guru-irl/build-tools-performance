import React from 'react';
const LABEL_41797 = 'component_41797';
export function Component41797({ value = 41797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41797, 'data-value': derived.doubled }, children);
}
export default Component41797;
