import React from 'react';
const LABEL_4166 = 'component_4166';
export function Component4166({ value = 4166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4166, 'data-value': derived.doubled }, children);
}
export default Component4166;
