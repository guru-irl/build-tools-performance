import React from 'react';
const LABEL_40897 = 'component_40897';
export function Component40897({ value = 40897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40897, 'data-value': derived.doubled }, children);
}
export default Component40897;
