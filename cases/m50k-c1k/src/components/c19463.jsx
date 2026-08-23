import React from 'react';
const LABEL_19463 = 'component_19463';
export function Component19463({ value = 19463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19463, 'data-value': derived.doubled }, children);
}
export default Component19463;
