import React from 'react';
const LABEL_23136 = 'component_23136';
export function Component23136({ value = 23136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23136, 'data-value': derived.doubled }, children);
}
export default Component23136;
