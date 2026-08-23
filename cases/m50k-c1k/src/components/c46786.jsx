import React from 'react';
const LABEL_46786 = 'component_46786';
export function Component46786({ value = 46786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46786, 'data-value': derived.doubled }, children);
}
export default Component46786;
