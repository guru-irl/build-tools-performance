import React from 'react';
const LABEL_41816 = 'component_41816';
export function Component41816({ value = 41816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41816, 'data-value': derived.doubled }, children);
}
export default Component41816;
