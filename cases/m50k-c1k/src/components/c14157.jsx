import React from 'react';
const LABEL_14157 = 'component_14157';
export function Component14157({ value = 14157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14157, 'data-value': derived.doubled }, children);
}
export default Component14157;
