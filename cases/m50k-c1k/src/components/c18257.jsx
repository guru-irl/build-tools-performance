import React from 'react';
const LABEL_18257 = 'component_18257';
export function Component18257({ value = 18257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18257, 'data-value': derived.doubled }, children);
}
export default Component18257;
