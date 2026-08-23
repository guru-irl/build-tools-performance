import React from 'react';
const LABEL_36492 = 'component_36492';
export function Component36492({ value = 36492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36492, 'data-value': derived.doubled }, children);
}
export default Component36492;
