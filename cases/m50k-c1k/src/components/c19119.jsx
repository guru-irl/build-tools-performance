import React from 'react';
const LABEL_19119 = 'component_19119';
export function Component19119({ value = 19119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19119, 'data-value': derived.doubled }, children);
}
export default Component19119;
