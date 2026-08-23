import React from 'react';
const LABEL_25635 = 'component_25635';
export function Component25635({ value = 25635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25635, 'data-value': derived.doubled }, children);
}
export default Component25635;
