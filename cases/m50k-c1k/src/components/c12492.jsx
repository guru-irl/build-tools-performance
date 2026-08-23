import React from 'react';
const LABEL_12492 = 'component_12492';
export function Component12492({ value = 12492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12492, 'data-value': derived.doubled }, children);
}
export default Component12492;
