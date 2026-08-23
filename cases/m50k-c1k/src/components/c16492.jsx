import React from 'react';
const LABEL_16492 = 'component_16492';
export function Component16492({ value = 16492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16492, 'data-value': derived.doubled }, children);
}
export default Component16492;
