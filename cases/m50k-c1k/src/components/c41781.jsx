import React from 'react';
const LABEL_41781 = 'component_41781';
export function Component41781({ value = 41781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41781, 'data-value': derived.doubled }, children);
}
export default Component41781;
