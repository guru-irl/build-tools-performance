import React from 'react';
const LABEL_42863 = 'component_42863';
export function Component42863({ value = 42863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42863, 'data-value': derived.doubled }, children);
}
export default Component42863;
