import React from 'react';
const LABEL_30773 = 'component_30773';
export function Component30773({ value = 30773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30773, 'data-value': derived.doubled }, children);
}
export default Component30773;
