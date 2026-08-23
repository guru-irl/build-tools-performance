import React from 'react';
const LABEL_18142 = 'component_18142';
export function Component18142({ value = 18142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18142, 'data-value': derived.doubled }, children);
}
export default Component18142;
