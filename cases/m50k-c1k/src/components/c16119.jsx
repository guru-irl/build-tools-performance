import React from 'react';
const LABEL_16119 = 'component_16119';
export function Component16119({ value = 16119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16119, 'data-value': derived.doubled }, children);
}
export default Component16119;
