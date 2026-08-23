import React from 'react';
const LABEL_14108 = 'component_14108';
export function Component14108({ value = 14108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14108, 'data-value': derived.doubled }, children);
}
export default Component14108;
