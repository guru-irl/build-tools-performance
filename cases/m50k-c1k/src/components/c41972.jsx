import React from 'react';
const LABEL_41972 = 'component_41972';
export function Component41972({ value = 41972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41972, 'data-value': derived.doubled }, children);
}
export default Component41972;
