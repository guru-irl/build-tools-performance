import React from 'react';
const LABEL_46217 = 'component_46217';
export function Component46217({ value = 46217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46217, 'data-value': derived.doubled }, children);
}
export default Component46217;
