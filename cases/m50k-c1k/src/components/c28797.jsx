import React from 'react';
const LABEL_28797 = 'component_28797';
export function Component28797({ value = 28797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28797, 'data-value': derived.doubled }, children);
}
export default Component28797;
