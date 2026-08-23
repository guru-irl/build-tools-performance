import React from 'react';
const LABEL_45410 = 'component_45410';
export function Component45410({ value = 45410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45410, 'data-value': derived.doubled }, children);
}
export default Component45410;
