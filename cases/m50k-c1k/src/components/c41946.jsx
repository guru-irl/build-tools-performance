import React from 'react';
const LABEL_41946 = 'component_41946';
export function Component41946({ value = 41946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41946, 'data-value': derived.doubled }, children);
}
export default Component41946;
