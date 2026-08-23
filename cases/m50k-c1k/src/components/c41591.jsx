import React from 'react';
const LABEL_41591 = 'component_41591';
export function Component41591({ value = 41591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41591, 'data-value': derived.doubled }, children);
}
export default Component41591;
