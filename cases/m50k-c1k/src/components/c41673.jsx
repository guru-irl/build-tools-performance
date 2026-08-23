import React from 'react';
const LABEL_41673 = 'component_41673';
export function Component41673({ value = 41673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41673, 'data-value': derived.doubled }, children);
}
export default Component41673;
