import React from 'react';
const LABEL_41344 = 'component_41344';
export function Component41344({ value = 41344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41344, 'data-value': derived.doubled }, children);
}
export default Component41344;
