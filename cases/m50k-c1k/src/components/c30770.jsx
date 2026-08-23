import React from 'react';
const LABEL_30770 = 'component_30770';
export function Component30770({ value = 30770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30770, 'data-value': derived.doubled }, children);
}
export default Component30770;
