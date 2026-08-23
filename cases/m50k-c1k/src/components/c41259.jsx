import React from 'react';
const LABEL_41259 = 'component_41259';
export function Component41259({ value = 41259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41259, 'data-value': derived.doubled }, children);
}
export default Component41259;
