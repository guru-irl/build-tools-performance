import React from 'react';
const LABEL_41843 = 'component_41843';
export function Component41843({ value = 41843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41843, 'data-value': derived.doubled }, children);
}
export default Component41843;
