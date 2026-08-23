import React from 'react';
const LABEL_41266 = 'component_41266';
export function Component41266({ value = 41266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41266, 'data-value': derived.doubled }, children);
}
export default Component41266;
