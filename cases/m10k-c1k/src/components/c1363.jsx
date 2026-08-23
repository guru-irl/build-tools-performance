import React from 'react';
const LABEL_1363 = 'component_1363';
export function Component1363({ value = 1363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1363, 'data-value': derived.doubled }, children);
}
export default Component1363;
