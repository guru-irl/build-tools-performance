import React from 'react';
const LABEL_45120 = 'component_45120';
export function Component45120({ value = 45120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45120, 'data-value': derived.doubled }, children);
}
export default Component45120;
