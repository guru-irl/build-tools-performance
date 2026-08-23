import React from 'react';
const LABEL_40119 = 'component_40119';
export function Component40119({ value = 40119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40119, 'data-value': derived.doubled }, children);
}
export default Component40119;
