import React from 'react';
const LABEL_14258 = 'component_14258';
export function Component14258({ value = 14258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14258, 'data-value': derived.doubled }, children);
}
export default Component14258;
