import React from 'react';
const LABEL_14773 = 'component_14773';
export function Component14773({ value = 14773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14773, 'data-value': derived.doubled }, children);
}
export default Component14773;
