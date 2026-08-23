import React from 'react';
const LABEL_41903 = 'component_41903';
export function Component41903({ value = 41903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41903, 'data-value': derived.doubled }, children);
}
export default Component41903;
