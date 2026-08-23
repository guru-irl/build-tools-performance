import React from 'react';
const LABEL_25492 = 'component_25492';
export function Component25492({ value = 25492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25492, 'data-value': derived.doubled }, children);
}
export default Component25492;
