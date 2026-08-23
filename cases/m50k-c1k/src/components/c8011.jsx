import React from 'react';
const LABEL_8011 = 'component_8011';
export function Component8011({ value = 8011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8011, 'data-value': derived.doubled }, children);
}
export default Component8011;
