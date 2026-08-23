import React from 'react';
const LABEL_34797 = 'component_34797';
export function Component34797({ value = 34797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34797, 'data-value': derived.doubled }, children);
}
export default Component34797;
