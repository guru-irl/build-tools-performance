import React from 'react';
const LABEL_41627 = 'component_41627';
export function Component41627({ value = 41627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41627, 'data-value': derived.doubled }, children);
}
export default Component41627;
