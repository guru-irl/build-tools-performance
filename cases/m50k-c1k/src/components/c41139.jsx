import React from 'react';
const LABEL_41139 = 'component_41139';
export function Component41139({ value = 41139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41139, 'data-value': derived.doubled }, children);
}
export default Component41139;
