import React from 'react';
const LABEL_26108 = 'component_26108';
export function Component26108({ value = 26108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26108, 'data-value': derived.doubled }, children);
}
export default Component26108;
