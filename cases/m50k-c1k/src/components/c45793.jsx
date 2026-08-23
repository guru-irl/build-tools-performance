import React from 'react';
const LABEL_45793 = 'component_45793';
export function Component45793({ value = 45793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45793, 'data-value': derived.doubled }, children);
}
export default Component45793;
